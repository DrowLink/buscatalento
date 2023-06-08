"""empty message

Revision ID: c0b077e0cce1
Revises: 89d396af6b7e
Create Date: 2023-06-08 20:08:00.554470

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c0b077e0cce1'
down_revision = '89d396af6b7e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('talent_request',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('request', sa.Boolean(), nullable=True),
    sa.Column('perfil_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['perfil_id'], ['perfil.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('talent_request')
    # ### end Alembic commands ###
