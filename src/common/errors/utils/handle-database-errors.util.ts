import { DatabaseError } from '../types/DatabaseError';
import { PrismaClientError } from '../types/PrismaClientError';
import { UniqueConstraintError } from '../types/UniqueConstraintError';

enum PrismaErrors {
  UniqueConstraintFail = 'P2002',
}

export const handleDatabaseErrors = (e: PrismaClientError): Error => {
  switch (e.code) {
    case PrismaErrors.UniqueConstraintFail:
      return new UniqueConstraintError(e);

    default:
      return new DatabaseError(e.message);
  }
};
